export interface Event {
  id: number,
  title: string,
  desc: string,
  img: string,
  choices: { label: string, affectedResourceId: number, score: number } []
}
