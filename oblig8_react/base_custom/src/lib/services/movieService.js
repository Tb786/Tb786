import client from '../client'

const fields = `
  _id,
  title,
  'slug': slug.current,
  'category': category->name.current,
`
const fields2 = `
  _id,
  name,
  'slug':slug.current
`

export async function getActorBySlug(slug) {
  const data = await client.fetch(`*[_type == "actors"]{${fields2}}`)
  {slug}
  return data
}
  

export const getMovie = async () => {
  const data = await client.fetch(`*[_type == "movie"]{${fields}}`);
  return data;
  
}
