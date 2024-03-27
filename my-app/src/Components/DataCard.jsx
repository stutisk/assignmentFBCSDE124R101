// import { data } from "../data";
export const DataCard = ({ data }) => {
  return (
    <section>
      <div className="flex flex-column gap ">
        {data?.map((item) => (
          <>
            <div>{item.text}</div>
            <div className="flex gap ">
              <div>{item.question1}</div>
              <div>{item.question2}</div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};
