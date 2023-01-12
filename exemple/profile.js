const project = {
    profile: {
        id: 1,
        myname: 'Vũ Đình Quân',
        address: 'Tứ Kỳ - Hải Dương',
        major: 'web deverloper',
        age: '31-10-2002',
        image: './images/imageprofile.jpg',
    },

}
const image = () => {
    return `
     <img src="${project.profile.image}" alt="">
    `
}

console.log(project.profile.image);
export { image,project };