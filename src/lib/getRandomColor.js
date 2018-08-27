export default function getRandomColor(){
  const colors = ['black', 'gray', 'red', 'blue', 'green']
  const random = Math.floor(Math.random() * colors.length);

  return colors[random]
}