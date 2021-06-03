let fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
const board = fen.split(' ')[0].split('/')
.map(line=>line.replace(/(\d)/g,(x)=>'_'.repeat(x)).split(''))

const swap = (array, [x1,y1], [x2,y2]) => {
  const tmp = array[y1][x1]
  array[y1][x1] = array[y2][x2]
  array[y2][x2] = tmp
}
const move = (color,san) => {
  let [_,piece,file1,rank1,captures,file2,rank2] =
  san.match(/([PNBRKQ]?)([a-h])?([1-8])?(x)?([a-h])([1-8])/)
  
  console.log(piece,file2,rank2)
}

move(1,'e5')
swap(board,[0,1],[5,5])

console.log(board)
