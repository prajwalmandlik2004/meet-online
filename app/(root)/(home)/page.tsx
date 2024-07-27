import MeetingTypeList from '@/components/MeetingTypeList';
// import suprsend from "@suprsend/web-sdk";

const Home = () => {
  const now = new Date();
  // suprsend.init(process.env.WORKSPACE_KEY!, process.env.WORKSPACE_SECRET!)
  // const time = now.toLocaleTimeString('en-US', { timeZone: 'Asia/Tokyo', hour12: true, hour: '2-digit', minute: '2-digit' });
  const localtime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);
  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal">
            {/* Upcoming Meeting at : {localtime} */}
            <h1 className="text-4xl font-extrabold">Meetify 👩🏻‍💻</h1>
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{localtime}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;



