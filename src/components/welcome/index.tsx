import type { FC } from 'react'
import cn from './welcome.module.scss'

export const Welcome: FC<{}> = () => {
  return <h1 className={cn.main}>Welcome</h1>
}
