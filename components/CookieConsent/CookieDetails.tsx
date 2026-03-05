interface Cookie {
  name: string;
  purpose: string;
  duration: string;
}

interface CookieDetailsProps {
  cookies: Cookie[];
}

export function CookieDetails({ cookies }: CookieDetailsProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-[#5B1B8D]/20 bg-black/20 dark:bg-black/20">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#5B1B8D]/20 bg-[#5B1B8D]/5">
            <th className="p-3 text-left text-sm font-semibold text-[#5B1B8D]">
              Name
            </th>
            <th className="p-3 text-left text-sm font-semibold text-[#5B1B8D]">
              Purpose
            </th>
            <th className="p-3 text-left text-sm font-semibold text-[#5B1B8D]">
              Duration
            </th>
          </tr>
        </thead>
        <tbody>
          {cookies.map((cookie, index) => (
            <tr
              key={cookie.name}
              className={`border-b border-white/5 transition-colors hover:bg-white/5 ${
                index === cookies.length - 1 ? "border-b-0" : ""
              }`}
            >
              <td className="p-3">
                <code className="rounded bg-black/30 px-2 py-1 text-xs text-[#5B1B8D] dark:bg-white/10">
                  {cookie.name}
                </code>
              </td>
              <td className="p-3 text-sm text-[#6B6B6B] dark:text-[#c8cbd0]">
                {cookie.purpose}
              </td>
              <td className="p-3 text-sm text-[#6B6B6B] dark:text-[#c8cbd0]">
                {cookie.duration}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
