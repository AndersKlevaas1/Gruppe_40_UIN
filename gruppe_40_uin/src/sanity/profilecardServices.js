import { client } from "./client"

export async function fetchProfileCard() {

  const data = await client.fetch(`*[_type == "profilecard"]{
    name,
    email,
    image {asset->{_id, url}},
    profilecardslug
  }`);

  return data;

}