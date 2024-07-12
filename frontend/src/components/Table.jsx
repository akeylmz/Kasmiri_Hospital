import classNames from 'classnames'
import React, { useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import { SiPanasonic } from 'react-icons/si'
import { useNavigate } from 'react-router-dom';

const Table = ({thead, tbody, searchable}) => {
    
    const navigate = useNavigate();
    const [sorting, setSorting] = useState({})
    const [search, setSearch] = useState('')
    const filteredData = tbody.filter(
        items => items.some(item => item.toString().toLocaleLowerCase('TR').includes(search.toLocaleLowerCase()))
    ).sort((a, b)=>{
        if(sorting?.orderBy === 'asc'){
           return a[sorting.key].toString().localeCompare(b[sorting.key])
        }
        if(sorting?.orderBy === 'dsc'){
            return b[sorting.key].toString().localeCompare(a[sorting.key])
         }
    })
  return (
    <>
        {searchable && (<div className='mb-4'>
            <input value={search} onChange={e => setSearch(e.target.value)} type="text" placeholder='Ara...' className='h-10 outline-none border rounded text-sm px-4 w-full border-gray-300 '/>
        </div>) }
        <div className='w-full border rounded p4'>        
            <table className='w-full '>
                <thead>
                    <tr>
                        {thead.map((h, key)=>(
                            <th 
                                width={h?.width}
                                className='text-left text-sm font-semibold text-gray-700 p-3 border-b'
                                key={key}>
                                    {h.name}
                                    {h.sortable && (
                                        <button onClick={()=>{
                                            if(sorting?.key === key){
                                                setSorting({
                                                    key,
                                                    orderBy: sorting.orderBy === 'asc' ? 'dsc' : 'asc'
                                                })
                                            }else{
                                                setSorting({
                                                    key,
                                                    orderBy: 'asc'
                                                })
                                            }
                                        }}><IoMdArrowDropdown /></button>
                                    )}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className='table-text-center'>
                    {filteredData.map((items, key) =>(
                        <tr key={key} className='group'>
                            {items.map((item, key)=>(
                                <td 
                                    onClick={key === 0 ? () =>  navigate(`/hasta/${item.replace(/\s+/g, "-").toLowerCase()}`) : null}
                                    className={classNames('p-3 text-sm group-hover:bg-blue-100 group-hover:text-blue-700',
                                        {"cursor-pointer" : key === 0}
                                    )}
                                    key={key}
                                >
                                    {Array.isArray(item) ? 
                                    (<div className='flex gap-x-2.5 z-40'>
                                        {item}
                                    </div>)
                                    : <p className={classNames('p-2 w-2/4 text-center rounded-full',{
                                        "bg-green-300": item === "Ödendi",
                                        "bg-yellow-300": item === "Bekliyor",
                                        "bg-red-300": item === "Günü Geçti"
                                    })}>{item}</p> }
                                </td>
                            ))}
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    </>
  )
}

export default Table