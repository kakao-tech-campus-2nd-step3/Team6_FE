export type Friend = {
  friendId: number
  name: string
  imageUrl: string
  isFriend: boolean
}

export type Group = {
  groupdId: number
  groupName: string
  groupdImageUrl: string
  groupDescription: string
  groupMemberCount: number
}

export interface ChatItem {
  chatId: number
  direction: 'left' | 'right'
  content: string
  createdAt: string
}

export interface ChatBoxProps {
  chatItem: ChatItem
}

export interface QuestionItem {
  profileQuestionId: number
  profileQuestionContent: string
  createdAt: string
}

export interface Question {
  questionId: number
  content: string
  users: Friend[]
}

export type AnswerRecord = {
  answerId: number
  questionId: number
  questionContent: string
  hintCount: 0 | 1 | 2 | 3
  createdAt: Date
}

export type PagingRequestParams = {
  size?: number
  page?: string
  sort?: string[]
}

export type Paging = {
  totalElements: number
  totalPages: number
  size: number
  page: number
}

export type DailyCookie = {
  createdAt: Date
  cookies: CookieLog[]
}

export type CookieLog = Omit<AnswerRecord, 'createdAt'>

export type MyPageItem = {
  todayVisited: number
  totalVisited: number
  description: string
  backgroundImageUrl: string
  name: string
}
