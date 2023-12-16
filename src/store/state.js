export default {
    user: {
        name: "Guest",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        id: 0
    },
    authenticated: true,
    errors: {},
    initialized: false,
    clients: [],
    currentClient: {},
    bmiRanges: {
        bmiMal1: { min: 1, max: 18.0, class: "bg-yellow-500" },
        bmiMal2: { min: 18.1, max: 20.0, class: "bg-yellow-300" },
        bmiStandard: { min: 20.1, max: 23.0, class: "bg-green-100" },
        bmiOverweight: { min: 23.1, max: 25.0, class: "bg-orange-100" },
        bmiObes1: { min: 25.1, max: 28.0, class: "bg-orange-300" },
        bmiObes2: { min: 28.1, max: 30.0, class: "bg-orange-500" },
        bmiObes3: { min: 30.0, max: 99.0, class: "bg-red-700" },
      },
    genders: [
        {
            id: 1,
            name: "Male",
            avatar:
                "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
            id: 2,
            name: "Female",
            avatar:
                "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        {
            id: 3,
            name: "Other",
            avatar:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
        },
    ]
}
