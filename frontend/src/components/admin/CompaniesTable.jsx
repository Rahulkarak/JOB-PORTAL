import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import React from 'react'
import { Edit2, MoreHorizontal } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { useSelector } from 'react-redux'

const CompaniesTable = () => {
    const { companies } = useSelector(store => store.company)
    return (
        <div>
            <Table>
                <TableCaption>A list of your recent registered companies</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Logo</TableHead>
                        <TableHead>Home</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className='text-right'>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        companies.length <= 0 ? <span>You haven't registered any company yet.</span> : (
                            <>
                                {
                                    companies?.map((company) => {
                                        return (
                                            <div key={company._id}>
                                                <TableCell>
                                                    <Avatar>
                                                        <AvatarImage style={{ width: '40px', height: '40px' }} src="https://marketplace.canva.com/EAFK6GIdp20/1/0/1600w/canva-blue-%26-black-simple-company-logo-nwGjVuSJ-D0.jpg" />
                                                    </Avatar>
                                                </TableCell>
                                                <TableCell>Company Name</TableCell>
                                                <TableCell>18-07-2024</TableCell>
                                                <TableCell>18-07-2024</TableCell>
                                                <TableCell className='text-right cursor-pointer'>
                                                    <Popover>
                                                        <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                                                        <PopoverContent className='w-32'>
                                                            <div className='flex items-center gap-2 w-fit cursor-pointer'>
                                                                <Edit2 className='w-4' />
                                                                <span>Edit</span>
                                                            </div>
                                                        </PopoverContent>
                                                    </Popover>
                                                </TableCell>
                                            </div>
                                        )
                                    })
                                }

                            </>
                        )
                    }

                </TableBody>

            </Table>
        </div>
    )
}

export default CompaniesTable