import React from 'react'
import { getProductBySlug } from '@/lib/actions/product.actions'

export default async function ProductDetailsPage({
    params
}:{
    params: Promise<{slug: string}>
}) {
    const {slug} = await params;
    const product = await getProductBySlug(slug);
  return (
    //Obtener información en la bsae de datos del producto {slug}
    <div>
        <h1>Detalle del producto: {slug}</h1>
        <p>{product?.description}</p>
    </div>
  )
}