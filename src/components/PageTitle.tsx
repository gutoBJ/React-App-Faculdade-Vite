interface Props {
  title: string
}

export default function PageTitle({ title }: Props) {
  document.title = `${title} - TechStart`
  return null
}