import Sidebar from './components/Sidebar'

{
  /* TODO
  - fix sidebar disappearing
  - find better solution for hover effect
  - fix background image expanding vertically when there is more content
  */
}

const Home = () => {
  return (
    <>
      <div className="relative">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <main className="m-auto min-h-[90vh] w-[90vw] max-w-[1100px] space-y-10 pr-20 text-3xl">
          <section className="h-screen">
            <h1 className="text-primary text-4xl font-bold">
              <code className="text-secondary">&lt;&gt;</code>
              Hello, world! Welcome to{' '}
              <span className="text-secondary">my page</span>
              <code className="text-secondary">&lt;/&gt;</code>
            </h1>
          </section>
        </main>
        <div className="md:hidden">
          <Sidebar />
        </div>
        {/*<footer className="bottom-1 mt-6 p-2 text-center text-sm md:bottom-0 md:p-0"></footer>*/}
      </div>
    </>
  )
}

export default Home
