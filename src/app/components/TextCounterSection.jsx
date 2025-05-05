export function TextCounterSection({ text }) {
  return (
    <>
      <section className="sm-center-text-sec">
        <div className="container">
          <div className="text-center">
            <p className="text-3" dangerouslySetInnerHTML={{ __html: text }} />
            <p className="text-3"></p>
          </div>
        </div>
      </section>
    </>
  );
}
