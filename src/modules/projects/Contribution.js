import GitHubCalendar from "react-github-calendar";

export default function Github() {
  return (
    <section className="flex flex-col justify-center items-center w-full">
      <div className="w-[80%] flex flex-col justify-center items-center space-y-5">
        <h1 className="font-bold text-2xl">My recent Github activities</h1>
        <GitHubCalendar username="nastarynaz" />
        <p>
          As a developer, Github is an essential tool for showcasing my projects
          and tracking my progress.
        </p>
      </div>
    </section>
  );
}
