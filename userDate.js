const Users = [
  {
    id: 1,
    uri: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    name: "Shay",
    location: "Jerusalem",
    feedPhoto:
      "https://images.unsplash.com/photo-1527672809634-04ed36500acd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    likes: 5,
    description: "Hello World!",
    time: "3 minutes ago",
  },
  {
    id: 2,
    uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Nadav",
    location: "Beer Sheva",
    feedPhoto:
      "https://images.unsplash.com/photo-1566314737379-76aaeadb0511?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=709&q=80",
    likes: 18,
    description: "Corona Time",
    time: "9 hours ago",
  },
  {
    id: 3,
    uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    name: "Liraz",
    location: "Tel-Aviv",
    feedPhoto:
      "https://images.unsplash.com/photo-1556703588-6eae2585e025?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    likes: 3,
    description: "Hello World!",
    time: "1 hour ago",
  },
  {
    id: 4,
    uri: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    name: "Yossi",
    location: "Jafa",
    feedPhoto:
      "https://images.unsplash.com/photo-1463693396721-8ca0cfa2b3b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    likes: 429,
    description: "New Beginings..",
    time: "2 min ago",
  },
  {
    id: 5,
    uri: "https://images.pexels.com/photos/10201379/pexels-photo-10201379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    name: "Dana",
    feedDescription: "",
    feedPhoto:
      "https://images.unsplash.com/photo-1547057740-4b18aac8eed2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    likes: 122,
    description: "few seconds ago",
  },
  {
    id: 6,
    uri: "https://images.pexels.com/photos/7578362/pexels-photo-7578362.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Uri",
    feedDescription: "",
    feedPhoto:
      "https://images.pexels.com/photos/4750385/pexels-photo-4750385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    likes: 12,
    description: "20 minutes ago",
  },
  {
    id: 7,
    uri: "https://images.pexels.com/photos/10499700/pexels-photo-10499700.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Doron",
    feedDescription: "",
    feedPhoto:
      "https://images.pexels.com/photos/9821844/pexels-photo-9821844.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    likes: 21,
    description: "few seconds ago",
  },
  {
    id: 8,
    uri: "https://images.pexels.com/photos/8478706/pexels-photo-8478706.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Elinor",
    feedDescription: "",
    feedPhoto:
      "https://images.pexels.com/photos/6061406/pexels-photo-6061406.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    likes: 3,
    description: "28 minutes ago",
  },
  {
    id: 9,
    uri: "https://images.pexels.com/photos/8477963/pexels-photo-8477963.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Igor",
    feedDescription: "",
    feedPhoto:
      "https://images.pexels.com/photos/10617531/pexels-photo-10617531.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    likes: 49,
    description: "1 day agp",
  },
  {
    id: 10,
    uri: "https://images.pexels.com/photos/7423781/pexels-photo-7423781.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Maxemilian",
    feedDescription: "",
    feedPhoto:
      "https://images.unsplash.com/photo-1547057740-4b18aac8eed2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    likes: 78,
    description: "2 days ago",
  },
];

export default Users;
