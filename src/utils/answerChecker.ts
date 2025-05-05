/**
 * Checks if an answer contains the required keywords
 * @param userAnswer The user's submitted answer
 * @param keywords Array of keywords that should be present in the answer
 * @returns Boolean indicating if the answer is correct
 */
export const checkAnswer = (userAnswer: string, keywords: string[]): boolean => {
  if (!userAnswer || !keywords || keywords.length === 0) {
    return false;
  }
  
  const normalizedAnswer = userAnswer.toLowerCase();
  
  // Calculate how many keywords are present in the answer
  const matchedKeywords = keywords.filter(keyword => 
    normalizedAnswer.includes(keyword.toLowerCase())
  );
  
  // Consider the answer correct if at least 60% of the keywords are present
  const minimumRequiredMatches = Math.ceil(keywords.length * 0.6);
  return matchedKeywords.length >= minimumRequiredMatches;
};