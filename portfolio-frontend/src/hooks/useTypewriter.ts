import { useState, useEffect } from 'react'

export const useTypewriter = (
  words: string[],
  typingSpeed = 75,
  deletingSpeed = 40,
  pauseDuration = 2000,
): string => {
  const [displayText, setDisplayText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPausing, setIsPausing] = useState(false)

  useEffect(() => {
    if (!words.length) return

    const currentWord = words[wordIndex % words.length]

    if (isPausing) {
      const timeout = setTimeout(() => {
        setIsPausing(false)
        setIsDeleting(true)
      }, pauseDuration)
      return () => clearTimeout(timeout)
    }

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const next = currentWord.slice(0, displayText.length + 1)
          setDisplayText(next)
          if (next === currentWord) setIsPausing(true)
        } else {
          const next = displayText.slice(0, -1)
          setDisplayText(next)
          if (next === '') {
            setIsDeleting(false)
            setWordIndex((prev) => prev + 1)
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, isPausing, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration])

  return displayText
}
