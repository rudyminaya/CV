import 'tailwindcss/tailwind.css'
import { useRouter } from 'next/router'

const Cv = ({ Component, pageProps }) => {
    let router = useRouter()

    return (
        <>
            <Component {...pageProps} />
        </>
    )
}

export default Cv
