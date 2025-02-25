import Sidebar from './components/Sidebar'

const Home = () => {
  return (
    <>
      <div className="relative">
        <Sidebar />
        <main className="m-auto min-h-[90vh] w-[90vw] max-w-[1100px] space-y-10 pr-20 text-3xl">
          <section className="h-screen">
            <h1 className="text-primary text-4xl font-bold">
              <code className="text-secondary">&lt;&gt;</code>
              Hello, world! Welcome to{' '}
              <span className="text-secondary">my page</span>
              <code className="text-secondary">&lt;/&gt;</code>
            </h1>
          </section>
          <section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni modi
            corporis animi asperiores consectetur fugit sapiente deserunt,
            maiores sint! Accusantium enim totam eum nobis minus aliquam, animi
            quibusdam temporibus reprehenderit laudantium error eligendi dolor
            distinctio ducimus fugit quos, at repellendus quisquam maxime ipsam.
            Quos nam, quidem deserunt soluta at ipsa eligendi, fugiat assumenda
            harum pariatur, eum veritatis numquam impedit cum ducimus laborum
            fugit corporis inventore officiis culpa! Ipsam quo sapiente quidem
            itaque aliquam aspernatur consectetur non corporis nesciunt deserunt
            illum quisquam ullam tenetur, provident sit vitae corrupti libero
            fugit mollitia est, ea iste! Magnam quas sapiente facere illo
            architecto? Ut expedita maxime saepe aperiam iste at minus ex
            dignissimos veritatis natus sunt aliquid sint repellat
            exercitationem ullam reiciendis nulla, facilis porro veniam quis
            fuga vitae? Molestiae impedit dolorem obcaecati est esse, alias
            adipisci aliquam asperiores exercitationem voluptatem consectetur
            libero laudantium? Molestiae eaque reiciendis praesentium ea enim
            eligendi expedita provident harum incidunt. Ut pariatur dolor
            nostrum et repellendus blanditiis deleniti iusto consequuntur aut
            modi. Corporis aliquam quam, natus totam doloremque maxime cum est
            corrupti excepturi, ex fugiat? Repellendus dolorem recusandae maxime
            aut temporibus, quod cum nulla asperiores facilis rem fugiat
            quibusdam. Dolorem reiciendis vero sunt veritatis quo delectus
            omnis! Culpa, tenetur.
          </section>
        </main>
        {/*<footer className="bottom-1 mt-6 p-2 text-center text-sm md:bottom-0 md:p-0"></footer>*/}
      </div>
    </>
  )
}

export default Home
