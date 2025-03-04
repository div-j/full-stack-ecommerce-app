import { TbArrowRight } from 'react-icons/tb'

export default function ProductHd(props) {
    const {product} = props

  return (
    <div>
        Home <TbArrowRight/> Shop <TbArrowRight/>{product.category}
        <TbArrowRight/>{product.name}
    </div>
  )
}
