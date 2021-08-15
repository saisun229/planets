import "./Download.css";

/**
 * Downloads the html content of the page
 *
 * @returns {JSX.Element} Download Component
 */
export default function Download(): JSX.Element {
  const fileName = `export-${new Date().getTime()}.html`;

  const downloadHtml = () => {
    var element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," +
        encodeURIComponent(document.documentElement.outerHTML)
    );
    element.setAttribute("download", fileName);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };

  return (
    <form onSubmit={downloadHtml}>
      <button
        type="submit"
        className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded button"
        onClick={downloadHtml}
      >
        Download
      </button>
    </form>
  );
}
