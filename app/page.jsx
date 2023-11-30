import Feed from "@components/Feed"

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">Promptopia
                <br className="max-md:hidden" />
                <span className="orange_gradient text-center">A place to find writing prompts and share your own.</span>
            </h1>
            <p className="desc text-center">Promptopia is an open-source project. You can find prompts about anything and everything, and you can share your own prompts for others to use.</p>
            <Feed />
        </section>
    )
}

export default Home