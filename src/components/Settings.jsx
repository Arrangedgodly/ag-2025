function Settings({ theme }) {
  return (
    <div className={
      theme == 0
        ? "bg-stone-100 text-slate-900"
        : "bg-neutral text-neutral-content"
    }>

    </div>
  );
}

export default Settings;