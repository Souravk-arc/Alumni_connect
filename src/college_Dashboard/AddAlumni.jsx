

import React from "react";

function AddAlumni() {
  return (
    <>
   


    <div className="relative flex size-full min-h-screen flex-col bg-[#f9f8fc] group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e9e7f3] px-10 py-3">
          <div className="flex items-center gap-4 text-[#0f0e1b]">
            <div className="size-4">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
              Alumni Network
            </h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              {["Home", "Alumni", "Events", "Groups", "Mentorship", "Jobs"].map(
                (link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-sm font-medium leading-normal text-[#0f0e1b]"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCv-8DmsSG1oRb-bRcqqeLCIK3v8aC5uxT51FWYdmrWGf_dJg9VtAPwz6zCZR0fAiDWYm3O_0Ui_K273Jw98HOa-sgj-7gOUo0RQ7PWG0OFuguv5Iq-U8oZF4AIxCCnvbX2-UzibI1AP_m0s0njugKvgr3iANnlVqG6K-WPAgkDCvmhIEfeB1DH3NB-tIHOibtK3DO_ZOk3HwmfwI8HSczLn98HIW6LFT9mlXFO-osCaYKBmgKj0rOelhvOM3aGbP-HqRp0f6Bt_tk')",
              }}
            />
          </div>
        </header>

        {/* Content */}
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] max-w-[960px] py-5 flex-1">
            <h2 className="text-[#0f0e1b] text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">
              Add New Alumni
            </h2>

            {[
              { label: "Full Name", placeholder: "Enter full name" },
              { label: "Graduation Batch/Year", placeholder: "e.g., 2015" },
              { label: "Department", placeholder: "e.g., Computer Science" },
              { label: "Email", placeholder: "Enter email address" },
              { label: "Phone Number", placeholder: "Enter phone number" },
              { label: "Current Job/Role", placeholder: "e.g., Software Engineer" },
              { label: "Company", placeholder: "e.g., Tech Solutions Inc." },
              { label: "Location", placeholder: "e.g., San Francisco, CA" },
            ].map((field) => (
              <div
                key={field.label}
                className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3"
              >
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-base font-medium leading-normal pb-2">
                    {field.label}
                  </p>
                  <input
                    placeholder={field.placeholder}
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0f0e1b] focus:outline-0 focus:ring-0 border border-[#d2d0e7] bg-[#f9f8fc] focus:border-[#d2d0e7] h-14 placeholder:text-[#554e97] p-[15px] text-base font-normal leading-normal"
                  />
                </label>
              </div>
            ))}

            {/* Skills */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-base font-medium leading-normal pb-2">
                  Skills/Expertise
                </p>
                <textarea
                  placeholder="List skills and areas of expertise"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0f0e1b] focus:outline-0 focus:ring-0 border border-[#d2d0e7] bg-[#f9f8fc] focus:border-[#d2d0e7] min-h-36 placeholder:text-[#554e97] p-[15px] text-base font-normal leading-normal"
                />
              </label>
            </div>

            {/* Radio */}
            <div className="flex flex-wrap gap-3 p-4">
              {["Yes", "No"].map((opt) => (
                <label
                  key={opt}
                  className="text-sm font-medium leading-normal flex items-center justify-center rounded-lg border border-[#d2d0e7] px-4 h-11 text-[#0f0e1b] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#5443ea] relative cursor-pointer"
                >
                  {opt}
                  <input
                    type="radio"
                    className="invisible absolute"
                    name="alumni-radio"
                  />
                </label>
              ))}
            </div>

            {/* Upload Button */}
            <div className="flex px-4 py-3 justify-start">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#e9e7f3] text-[#0f0e1b] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Upload Profile Picture</span>
              </button>
            </div>

            {/* Actions */}
            <div className="flex justify-stretch">
              <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-end">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#e9e7f3] text-[#0f0e1b] text-sm font-bold leading-normal tracking-[0.015em]">
                  Cancel
                </button>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#5443ea] text-[#f9f8fc] text-sm font-bold leading-normal tracking-[0.015em]">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default AddAlumni;
