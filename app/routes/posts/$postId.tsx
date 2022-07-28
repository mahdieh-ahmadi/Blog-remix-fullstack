import { useParams } from "@remix-run/react"

const postItem = () => {
    const params = useParams()

    return (
        <div>
            post detail {params.postId}
        </div>
    )
}

export default postItem