import React, { FC } from 'react'
import { ITableItem } from './admin-table.interface'
import AdminTableHeader from './AdminTableHeader'
import SkeletonLoader from '../../SkeletonLoader'
import AdminTableItem from './AdminTableItem'

import styles from './AdminTable.module.scss'

interface IAdminTable{
	tableItems: ITableItem[]
	isLoading:boolean
	headerItems:string[]
	removeHandler:(id:string)=>void

}

const AdminTable:FC<IAdminTable> = ({tableItems, headerItems, isLoading, removeHandler}) => {

	return (
		<div>
			<AdminTableHeader headerItems={headerItems} />

			{isLoading ? (
				<SkeletonLoader count={1} height={48} className="mt-4" />
			) : tableItems.length ? (
				tableItems.map((tableItem) => (
					<AdminTableItem
						key={tableItem._id}
						tableItem={tableItem}
						removeHandler={()=>removeHandler(tableItem._id)}
					/>
				))
			) : (
				<div className={styles.notFound}>Elements not found</div>
			)}
		</div>
	)
}

export default AdminTable
