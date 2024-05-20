const element = (
  <>
    <header>
      <h2 className="container">Search</h2>
    </header>
    <div class="container">
      <form>
        <input type="text" placeholder="Search the item here" autoFocus />
        <button type="reset" className="btn-reset"></button>
      </form>
    </div>
  </>
);

ReactDOM.render(element, document.querySelector("#app"));
