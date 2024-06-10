import Link from "next/link";
import { getAllDocs } from "../lib/markdown";

const Pagination = ({ section, id }: { section: string; id: string }) => {
  const allDocs = getAllDocs();
  const currentIndex = allDocs.findIndex(
    (doc) => doc.section === section && doc.id === id
  );
  const prevDoc = currentIndex > 0 ? allDocs[currentIndex - 1] : null;
  const nextDoc =
    currentIndex < allDocs.length - 1 ? allDocs[currentIndex + 1] : null;
  return (
    <div
      className={`${
        currentIndex > -1 ? "justify-between" : "justify-end"
      } w-full flex`}
    >
      {prevDoc ? (
        <dl className="flex pt-6 border-t border-slate-200">
          <div className="ml-auto text-right">
            <dt className="text-sm font-normal tracking-tight text-slate-600">
              Previous
            </dt>

            <dd className="mt-1">
              <Link
                href={`/${prevDoc.section}/${prevDoc.id}`}
                className="capitalize text-base font-semibold text-slate-900 hover:underline"
              >
                {prevDoc.id
                  .slice(prevDoc.id.indexOf(".") + 1)
                  .replace("-", " ")}
              </Link>
            </dd>
          </div>
        </dl>
      ) : (
        <dl
          className={`${
            currentIndex > -1 ? "flex" : "hidden"
          } pt-6 border-t border-slate-200`}
        >
          <div className="ml-auto text-right">
            <dt className="text-sm font-normal tracking-tight text-slate-600">
              Previous
            </dt>

            <dd className="mt-1">
              <Link
                href="/"
                className="capitalize text-base font-semibold text-slate-900 hover:underline"
              >
                Welcome
              </Link>
            </dd>
          </div>
        </dl>
      )}
      {nextDoc ? (
        <dl className="flex pt-6 border-t border-slate-200">
          <div className="ml-auto text-right">
            <dt className="text-sm font-normal tracking-tight text-slate-600">
              Next
            </dt>

            <dd className="mt-1">
              <Link
                href={`/${nextDoc.section}/${nextDoc.id}`}
                className="capitalize text-base font-semibold text-slate-900 hover:underline"
              >
                {nextDoc.id
                  .slice(nextDoc.id.indexOf(".") + 1)
                  .replace("-", " ")}
              </Link>
            </dd>
          </div>
        </dl>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default Pagination;
