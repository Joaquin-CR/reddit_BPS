export const revalidate = 86400

type Props = {
    params: {
        postId: string
    }
}

// export async function generateStaticParams() {
//   const posts = await getPostsMeta() //deduped!

//   if (!posts) return []

//   return posts.map((post) => ({
//       postId: post.id
//   }))
// }

function page() {
  return <div>page</div>;
}

export default page;
