export type Friend = {
  friendId: number
  name: string
  imageUrl: string
  isFriend: boolean
}

export type Group = {
  groupId: number
  groupName: string
  groupdImageUrl: string
  groupDescription: string
}

export type ChatItem = {
  chatId: number
  direction: 'left' | 'right'
  content: string
  createdAt: string
  deleteBtn: boolean
  onDelete?: () => void
}

export type ChatBoxProps = {
  chatItem: ChatItem
}

export type QuestionItem = {
  profileQuestionId: number
  profileQuestionContent: string
  createdAt: string
}

export type Question = {
  questionId: number
  content: string
}

export type ProfileAnswerItem = {
  profileAnswerId: string
  content: string
  profileQuestionContent: string
  createdAt: string
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

export type PagingResponse<T> = {
  content: T
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
  imageUrl: string
  name: string
}

export type Hint = {
  hintNum: number
  valid: boolean
  content: string
}

export type Modal = {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export type Member = {
  groupMemberId: number
  userId: number
  role: GroupRole
  userName: string
  joinedAt: string
  memberImageUrl?: string
}

export type PointOptions = 'ALL' | 'CHARGED' | 'USED'

export type Point = {
  id: number
  point: number
  option: PointOptions
  createdAt: string
}

export type RankItem = {
  rank: number
  imageSrc?: string
  title: string
  subtitle: string
  count: number
}

export type UserRankingItem = {
  rakingId: number
  question: string
  rank: number
  count: number
  groupName: string
}

export type GroupRole = 'MEMBER' | 'LEADER'

export type GroupRankingItem = {
  rank: number
  count: number
  userId: number
}

export type MemberTable = {
  id: number
  memberImageUrl: string
  userName: string
  joinedAt: string
  isExpel?: string
  userId: number
  role: GroupRole
}
