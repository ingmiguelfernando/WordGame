export interface CardData {
  id: number
  word: string
  // What it looks like it means in English (the "false friend" trap)
  falseMeaning: string
  // What it really means in English
  trueMeaning: string
  emoji: string
}

export const cards: CardData[] = [
  {
    id: 1,
    word: 'embarazada',
    falseMeaning: 'embarrassed / ashamed',
    trueMeaning: 'pregnant',
    emoji: '🤰',
  },
  {
    id: 2,
    word: 'constipado',
    falseMeaning: 'constipated',
    trueMeaning: 'having a cold',
    emoji: '🤧',
  },
  {
    id: 3,
    word: 'actual',
    falseMeaning: 'real / genuine',
    trueMeaning: 'current',
    emoji: '📅',
  },
  {
    id: 4,
    word: 'carpeta',
    falseMeaning: 'carpet',
    trueMeaning: 'folder',
    emoji: '📁',
  },
  {
    id: 5,
    word: 'fábrica',
    falseMeaning: 'fabric',
    trueMeaning: 'factory',
    emoji: '🏭',
  },
  {
    id: 6,
    word: 'asistir',
    falseMeaning: 'to assist',
    trueMeaning: 'to attend / to be present',
    emoji: '🙋',
  },
]
