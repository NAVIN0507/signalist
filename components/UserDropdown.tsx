'use client'
import React from 'react'
import{
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { Avatar, AvatarFallback } from './ui/avatar'
const UserDropdown = () => {
  const router = useRouter();
  const handleSignout  = async()=>{
    router.push("/sign-in")
  }
  const user = {name:"Navin" , email:"navinofficial2005@gmail.com"}
  return (
    <DropdownMenu>
  <DropdownMenuTrigger asChild className='border-none bg-none hover:bg-none'>
    <Button variant={"ghost"} className='flex items-center gap-3 text-gray-400 hover:text-yellow-500'>
      <Avatar className='h-8 w-8'>
        <AvatarFallback className='bg-yellow-500 text-yellow-900 text-sm font-bold'>{user.name[0]}</AvatarFallback>
      </Avatar>
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>   
  )
}

export default UserDropdown