import { Box } from '@mui/material'
import Link from 'next/link'
import styles from '@/styles/header.module.scss'
import Image from 'next/image'

interface Props {}

const HeaderComponent = ({}: Props) => {
  return (
    <header className={styles.header}>
      <Box className={styles.flexItem}>
        <Link href='/' className={styles.box}>
          <Image src='/inflearn.png' alt='logo' width={110} height={20} />
        </Link>
      </Box>
    </header>
  )
}

export default HeaderComponent
