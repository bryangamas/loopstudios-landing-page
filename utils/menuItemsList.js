export const menuItemsList = [
  {
    id: "1",
    title: "About",
    href: "#",
  },
  {
    id: "2",
    title: "Careers",
    href: "#",
  },
  {
    id: "3",
    title: "Events",
    href: "#",
  },
  {
    id: "4",
    title: "Products",
    href: "#",
  },
  {
    id: "5",
    title: "Support",
    href: "#",
  },
];

export const upperMenuItemsList = menuItemsList.map(({ title, ...others }) => {
  return {
    ...others,
    title: title.toUpperCase(),
  };
});
