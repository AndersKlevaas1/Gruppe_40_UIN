import { client } from "./client";

export async function fetchProfileCard() {
  const data = await client.fetch(`*[_type == "profilecard"]{
    name,
    email,
    image {asset->{_id, url}},
    profilecardslug
  }`);
  return data;
}

export async function fetchProfileDetail(slug) {
  const data = await client.fetch(
    `*[_type == "profilecard" && profilecardslug.current == $slug][0]{
      name,
      biography, // Endret fra 'bio' til 'biography'
      email,
      image { asset -> { url } },
      interests
    }`,
    { slug }
  );
  return data;
}