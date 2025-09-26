import Noise from "./Noise";
import InfiniteScroll from "./InfiniteScroll";

function Max({ theme }) {
  const items = [
    { content: "Text Item 1" },
    { content: <p>Paragraph Item 2</p> },
    { content: "Text Item 3" },
    { content: <p>Paragraph Item 4</p> },
    { content: "Text Item 5" },
    { content: <p>Paragraph Item 6</p> },
    { content: "Text Item 7" },
    { content: <p>Paragraph Item 8</p> },
    { content: "Text Item 9" },
    { content: <p>Paragraph Item 10</p> },
    { content: "Text Item 11" },
    { content: <p>Paragraph Item 12</p> },
    { content: "Text Item 13" },
    { content: <p>Paragraph Item 14</p> },
  ];

  return (
    <div
      className={
        theme == 0
          ? "bg-stone-100 text-slate-900 flex-1"
          : "bg-neutral text-neutral-content flex-1"
      }
    >
      <Noise />
      <InfiniteScroll items={items} />
    </div>
  );
}

export default Max;
