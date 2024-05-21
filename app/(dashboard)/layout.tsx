import Header from '@/components/header'

type Props = {
  children: React.ReactNode
}
const DashboardLayout = ({ children }: Props) => {
  return (
    <>
        <Header />
        <div className="px-4 lg:px-14">

        <main className="max-w-screen-2xl mx-auto">{children}</main>
        </div>
    </>
  )
}

export default DashboardLayout