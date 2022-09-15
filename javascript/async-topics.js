
/**
 * Dont use forEach
 * use for...of or promise.all or promise.allSettled
 * https://www.youtube.com/watch?v=4lqJBBEpjRE&list=PL0Zuz27SZ-6N3bG4YZhkrCL3ZmDcLTuGd&index=17
 */


// fetch serialized  (same as for of)
const getPostSerialized = async (ids) => {
    await ids.reduce(async (acc, id) => {
        // waits for the prev item to complete
        await acc
        // get the next item
        const post = await getPost(id)
        console.log(post)
    }, Promise.resolve())
    console.log("I'll wait. ")
}


// fetch concurrently
const getPostConcurrently = async (ids) => {

}