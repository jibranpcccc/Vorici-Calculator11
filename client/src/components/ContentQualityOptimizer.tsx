import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';

interface ContentQualityReport {
  readability: {
    score: number;
    level: 'excellent' | 'good' | 'fair' | 'poor';
    avgWordsPerSentence: number;
    avgSyllablesPerWord: number;
    recommendations: string[];
  };
  keywordOptimization: {
    primaryKeywordDensity: number;
    keywordPlacement: {
      inTitle: boolean;
      inH1: boolean;
      inFirstParagraph: boolean;
      inMeta: boolean;
    };
    lsiKeywords: string[];
    recommendations: string[];
  };
  contentStructure: {
    wordCount: number;
    paragraphCount: number;
    avgWordsPerParagraph: number;
    hasLists: boolean;
    hasSubheadings: boolean;
    recommendations: string[];
  };
}

export function useContentQualityAnalysis(): ContentQualityReport {
  const [location] = useLocation();
  const [report, setReport] = useState<ContentQualityReport>({
    readability: {
      score: 0,
      level: 'poor',
      avgWordsPerSentence: 0,
      avgSyllablesPerWord: 0,
      recommendations: []
    },
    keywordOptimization: {
      primaryKeywordDensity: 0,
      keywordPlacement: {
        inTitle: false,
        inH1: false,
        inFirstParagraph: false,
        inMeta: false
      },
      lsiKeywords: [],
      recommendations: []
    },
    contentStructure: {
      wordCount: 0,
      paragraphCount: 0,
      avgWordsPerParagraph: 0,
      hasLists: false,
      hasSubheadings: false,
      recommendations: []
    }
  });

  useEffect(() => {
    const analyzeContent = () => {
      const mainContent = document.querySelector('main') || document.body;
      const textContent = mainContent.textContent || '';
      
      // Readability analysis
      const sentences = textContent.match(/[.!?]+/g)?.length || 1;
      const words = textContent.trim().split(/\s+/).filter(word => word.length > 0);
      const wordCount = words.length;
      const avgWordsPerSentence = wordCount / sentences;
      
      // Simple syllable counting
      const avgSyllablesPerWord = words.reduce((total, word) => {
        return total + countSyllables(word);
      }, 0) / wordCount;

      // Flesch Reading Ease approximation
      const fleschScore = 206.835 - (1.015 * avgWordsPerSentence) - (84.6 * avgSyllablesPerWord);
      const readabilityLevel = getReadabilityLevel(fleschScore);

      const readabilityRecommendations: string[] = [];
      if (avgWordsPerSentence > 20) {
        readabilityRecommendations.push('Break up long sentences (avg: ' + Math.round(avgWordsPerSentence) + ' words)');
      }
      if (avgSyllablesPerWord > 1.5) {
        readabilityRecommendations.push('Use simpler words to improve readability');
      }

      // Keyword optimization analysis
      const primaryKeywords = ['path of exile', 'poe', 'crafting', 'calculator', 'socket', 'coloring', 'vorici'];
      const lowerContent = textContent.toLowerCase();
      
      let keywordCount = 0;
      primaryKeywords.forEach(keyword => {
        const matches = (lowerContent.match(new RegExp(keyword, 'g')) || []).length;
        keywordCount += matches;
      });
      
      const keywordDensity = (keywordCount / wordCount) * 100;
      
      // Check keyword placement
      const title = document.title.toLowerCase();
      const h1 = document.querySelector('h1')?.textContent?.toLowerCase() || '';
      const firstParagraph = document.querySelector('main p')?.textContent?.toLowerCase() || '';
      const metaDesc = document.querySelector('meta[name="description"]')?.getAttribute('content')?.toLowerCase() || '';
      
      const keywordPlacement = {
        inTitle: primaryKeywords.some(kw => title.includes(kw)),
        inH1: primaryKeywords.some(kw => h1.includes(kw)),
        inFirstParagraph: primaryKeywords.some(kw => firstParagraph.includes(kw)),
        inMeta: primaryKeywords.some(kw => metaDesc.includes(kw))
      };

      const keywordRecommendations: string[] = [];
      if (keywordDensity < 0.5) {
        keywordRecommendations.push('Increase keyword density (currently ' + keywordDensity.toFixed(1) + '%)');
      } else if (keywordDensity > 3) {
        keywordRecommendations.push('Reduce keyword density to avoid over-optimization');
      }
      
      if (!keywordPlacement.inTitle) keywordRecommendations.push('Include primary keyword in title');
      if (!keywordPlacement.inH1) keywordRecommendations.push('Include primary keyword in H1');
      if (!keywordPlacement.inFirstParagraph) keywordRecommendations.push('Include primary keyword in first paragraph');

      // LSI keywords for Path of Exile crafting
      const lsiKeywords = [
        'orb of fusing', 'chromatic orb', 'jeweller orb', 'socket linking',
        'item crafting', 'currency optimization', 'bench crafting', 'probability calculation'
      ];

      // Content structure analysis
      const paragraphs = Array.from(document.querySelectorAll('main p')).filter(p => p.textContent?.trim());
      const paragraphCount = paragraphs.length;
      const avgWordsPerParagraph = paragraphCount > 0 ? wordCount / paragraphCount : 0;
      
      const hasLists = document.querySelectorAll('main ul, main ol').length > 0;
      const hasSubheadings = document.querySelectorAll('main h2, main h3, main h4').length > 0;

      const structureRecommendations: string[] = [];
      if (wordCount < 300) {
        structureRecommendations.push('Increase content length for better SEO (current: ' + wordCount + ' words)');
      }
      if (avgWordsPerParagraph > 150) {
        structureRecommendations.push('Break up long paragraphs for better readability');
      }
      if (!hasLists && wordCount > 500) {
        structureRecommendations.push('Add bullet points or numbered lists to improve scannability');
      }
      if (!hasSubheadings && wordCount > 800) {
        structureRecommendations.push('Add subheadings to break up content');
      }

      setReport({
        readability: {
          score: Math.max(0, Math.min(100, fleschScore)),
          level: readabilityLevel,
          avgWordsPerSentence,
          avgSyllablesPerWord,
          recommendations: readabilityRecommendations
        },
        keywordOptimization: {
          primaryKeywordDensity: keywordDensity,
          keywordPlacement,
          lsiKeywords,
          recommendations: keywordRecommendations
        },
        contentStructure: {
          wordCount,
          paragraphCount,
          avgWordsPerParagraph,
          hasLists,
          hasSubheadings,
          recommendations: structureRecommendations
        }
      });
    };

    const timeout = setTimeout(analyzeContent, 300);
    return () => clearTimeout(timeout);
  }, [location]);

  return report;
}

function countSyllables(word: string): number {
  word = word.toLowerCase();
  if (word.length <= 3) return 1;
  
  // Remove common word endings that don't add syllables
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
  word = word.replace(/^y/, '');
  
  // Count vowel groups
  const matches = word.match(/[aeiouy]{1,2}/g);
  return matches ? matches.length : 1;
}

function getReadabilityLevel(score: number): 'excellent' | 'good' | 'fair' | 'poor' {
  if (score >= 70) return 'excellent';
  if (score >= 60) return 'good';
  if (score >= 50) return 'fair';
  return 'poor';
}

// Enhanced text component with readability optimization
interface ReadableTextProps {
  children: React.ReactNode;
  className?: string;
  maxWordsPerSentence?: number;
}

export function ReadableText({ children, className = '', maxWordsPerSentence = 20 }: ReadableTextProps) {
  return (
    <div className={`leading-relaxed ${className}`} style={{ lineHeight: '1.6' }}>
      {children}
    </div>
  );
}

// Content quality validation panel for development
export function ContentQualityPanel() {
  const report = useContentQualityAnalysis();
  const [isVisible, setIsVisible] = useState(false);

  if (import.meta.env.PROD) return null;

  const getScoreColor = (score: number) => {
    if (score >= 70) return 'text-green-400';
    if (score >= 50) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="fixed bottom-52 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-purple-500 text-white px-3 py-2 rounded-lg text-sm font-medium"
      >
        Content ({report.contentStructure.wordCount}w)
      </button>
      
      {isVisible && (
        <div className="absolute bottom-12 right-0 w-96 bg-poe-surface border border-poe-accent/20 rounded-lg p-4 shadow-lg max-h-96 overflow-y-auto">
          <h3 className="text-poe-accent font-semibold mb-3">Content Quality Report</h3>
          
          {/* Readability */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-poe-text mb-2">Readability</h4>
            <div className={`text-sm ${getScoreColor(report.readability.score)}`}>
              Score: {Math.round(report.readability.score)} ({report.readability.level})
            </div>
            <div className="text-xs text-poe-text-secondary">
              Avg words/sentence: {Math.round(report.readability.avgWordsPerSentence)}
            </div>
          </div>

          {/* Keywords */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-poe-text mb-2">Keywords</h4>
            <div className="text-xs text-poe-text-secondary">
              Density: {report.keywordOptimization.primaryKeywordDensity.toFixed(1)}%
            </div>
            <div className="text-xs">
              Placement: 
              {Object.entries(report.keywordOptimization.keywordPlacement).map(([key, value]) => (
                <span key={key} className={value ? 'text-green-400 ml-1' : 'text-red-400 ml-1'}>
                  {key.replace(/([A-Z])/g, ' $1')}
                </span>
              ))}
            </div>
          </div>

          {/* Structure */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-poe-text mb-2">Structure</h4>
            <div className="text-xs text-poe-text-secondary">
              Words: {report.contentStructure.wordCount} | 
              Paragraphs: {report.contentStructure.paragraphCount} | 
              Lists: {report.contentStructure.hasLists ? '✓' : '✗'} |
              Subheadings: {report.contentStructure.hasSubheadings ? '✓' : '✗'}
            </div>
          </div>

          {/* Recommendations */}
          {(report.readability.recommendations.length > 0 || 
            report.keywordOptimization.recommendations.length > 0 || 
            report.contentStructure.recommendations.length > 0) && (
            <div>
              <h4 className="text-sm font-medium text-poe-text mb-2">Recommendations:</h4>
              <ul className="space-y-1 text-xs text-poe-text-secondary">
                {[...report.readability.recommendations, 
                  ...report.keywordOptimization.recommendations,
                  ...report.contentStructure.recommendations].map((rec, index) => (
                  <li key={index}>• {rec}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}