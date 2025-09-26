import Noise from "./Noise";

function Settings({ theme }) {
  return (
    <div className={
      theme == 0
        ? "bg-stone-100 text-slate-900 flex-1"
        : "bg-neutral text-neutral-content flex-1"
    }>
      <Noise />
    </div>
  );
}

export default Settings;