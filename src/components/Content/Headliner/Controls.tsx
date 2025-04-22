import { ButtonIcon } from "@/libs/ButtonIcon";
import { Progress } from "@/libs/Progress";

type Props = {
  setID: (id: string) => void;
  activeID: string;
  dataIDs: string[];
};

export function Controls({ activeID, setID, dataIDs }: Props) {
  const activeIDIndex = dataIDs.indexOf(activeID);

  function handleClick(option: "prev" | "next") {
    const options = {
      prev: () => {
        const prevIndex = Math.max(activeIDIndex - 1, 0);
        setID(dataIDs[prevIndex]);
      },
      next: () => {
        let nextIndex = Math.min(activeIDIndex + 1, dataIDs.length - 1);
        setID(dataIDs[nextIndex]);
      },
    };
    return options[option]();
  }

  return (
    <aside className="controls">
      <section className="progress">
        <p>{Math.min(1, dataIDs.length)}</p>
        <Progress
          value={activeIDIndex + 1}
          max={dataIDs.length}
          size={{ width: `${20 * dataIDs.length}px`, height: "2px" }}
        />
        <p>{dataIDs.length}</p>
      </section>

      <section className="buttons">
        <ButtonIcon
          disabled={activeIDIndex === 0}
          onClick={() => handleClick("prev")}
          icon="IconArrowLeft"
          className="btn"
        />
        <ButtonIcon
          disabled={activeIDIndex === dataIDs.length - 1}
          onClick={() => handleClick("next")}
          icon="IconArrowRight"
          className="btn"
        />
      </section>
    </aside>
  );
}
