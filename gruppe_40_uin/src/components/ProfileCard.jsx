

export default function ProfileCard({ profile }) {
  return (
    <main>
      <h2>{profile.name}</h2>
      <p>{profile.email}</p>
      <img src={profile.image?.asset?.url} alt={profile.name} />
    </main>
  );
}