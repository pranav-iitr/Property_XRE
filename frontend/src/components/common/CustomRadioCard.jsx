"use client"
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { classNames } from '@/constant/helper'

const plans = [
    { name: 'Startup', priceMonthly: 29, priceYearly: 290, limit: 'Up to 5' },
]

export default function CustomRadioCard(props) {
    const [selected, setSelected] = useState(plans[0])
    const { title, checked, name } = props
    return (
        <RadioGroup value={selected} onChange={setSelected}>
            <RadioGroup.Label className="sr-only">Pricing plans</RadioGroup.Label>
            <div className="relative -space-y-px rounded-md bg-white">
                <RadioGroup.Option
                    key={name}
                    value={title}
                    className={() =>
                        classNames(
                            checked ? 'z-10 border-indigo-200 bg-indigo-50' : 'border-gray-200',
                            'relative flex cursor-pointer flex-col border p-2 focus:outline-none md:grid md:grid-cols-3 '
                        )
                    }
                >
                    {({ active, checked }) => (
                        <>
                            <span className="flex items-center text-sm">
                                <span
                                    className={classNames(
                                        checked ? 'bg-indigo-600 border-transparent' : 'bg-white border-gray-300',
                                        checked ? 'ring-2 ring-offset-2 ring-indigo-600' : '',
                                        'h-4 w-4 rounded-full border flex items-center justify-center'
                                    )}
                                    aria-hidden="true"
                                >
                                    <span className="rounded-full bg-white w-10" />
                                </span>
                                <RadioGroup.Label
                                    as="span"
                                    className={classNames(checked ? 'text-indigo-900' : 'text-gray-900', 'ml-2 font-medium')}
                                >
                                    {title}
                                </RadioGroup.Label>
                            </span>
                        </>
                    )}
                </RadioGroup.Option>
            </div>
        </RadioGroup>
    )
}
