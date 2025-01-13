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


                        companies?.map((company) => (
                            <tr>
                                <TableCell>
                                    <Avatar>
                                        <AvatarImage style={{ width: '40px', height: '40px' }} src={company.logo} />
                                    </Avatar>
                                </TableCell>
                                <TableCell>{company.name}</TableCell>
                                <TableCell>{company.createdAt.split("T")[0]}</TableCell>
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
                            </tr>
                        ))
                    }

                </TableBody>

            </Table>
        </div>
    )
}

export default CompaniesTable