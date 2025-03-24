"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Define the form schema with validation
export const formSchema = z.object({
    shipTo: z.string().min(1, { message: "Ship to address is required" }),
    shipFrom: z.string().min(1, { message: "Ship from address is required" }),
    asn: z.string().min(1, { message: "ASN# is required" }),
    shipMode: z.string().min(1, { message: "Ship mode is required" }),
    totalWeight: z.string().min(1, { message: "Total weight is required" }),
    totalCartons: z.string().min(1, { message: "Total number of cartons is required" }),
    receivedCartons: z.string().min(1, { message: "Received number of cartons is required" }),
    missingCartons: z.string().optional(),
    overCartons: z.string().optional(),
    damagedCartons: z.string().optional(),
})

export type FormValues = z.infer<typeof formSchema>

interface ShippingFormProps {
    poNumber: string
    onSubmit: (values: FormValues) => void
    onCancel: () => void
    isInModal?: boolean
}

export function ShippingForm({ poNumber, onSubmit, onCancel, isInModal = false }: ShippingFormProps) {
    // Initialize the form
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            shipTo: "",
            shipFrom: "",
            asn: "",
            shipMode: "",
            totalWeight: "",
            totalCartons: "",
            receivedCartons: "",
            missingCartons: "",
            overCartons: "",
            damagedCartons: "",
        },
    })

    // Ship mode options
    const shipModes = ["Air Freight", "Ocean Freight", "Road Transport", "Rail Transport", "Express Delivery"]

    // Handle form submission
    function handleSubmit(values: FormValues) {
        onSubmit(values)
    }

    // Apply different styles based on whether the form is in a modal
    const containerStyles: React.CSSProperties = isInModal ? { maxHeight: "60vh", overflowY: "auto", padding: "0" } : { padding: "1.5rem" }

    return (
        <div className={`w-full ${isInModal ? "" : "max-w-md mx-auto"} space-y-6`} style={containerStyles}>
            <h1 className="text-2xl font-bold text-center">PO#{poNumber}</h1>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="shipTo"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Ship to -</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter full address (can be generated from the portal)" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="shipFrom"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Ship From -</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter full address (can be generated from the portal)" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="asn"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>ASN#</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter ASN#" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="shipMode"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Select Ship Mode</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select the ship mode (can be generated from the portal)" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {shipModes.map((mode) => (
                                            <SelectItem key={mode} value={mode}>
                                                {mode}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="totalWeight"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Total Weight</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Total weight for this shipment (can be generated from the detailed packing list)"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="totalCartons"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Total Number of Cartons</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Number of cartons in this shipment (can be generated from the detailed packing list)"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="receivedCartons"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Received Number of Cartons</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Total number of cartons received in PO. To be entered by CFS receiver"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="missingCartons"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Missing Cartons</FormLabel>
                                <FormControl>
                                    <Input placeholder="Number of missing cartons" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="overCartons"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Over Cartons</FormLabel>
                                <FormControl>
                                    <Input placeholder="Number of extra cartons" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="damagedCartons"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Damaged Cartons</FormLabel>
                                <FormControl>
                                    <Input placeholder="Number of damaged cartons" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="pt-4 space-y-2">
                        <Button type="submit" variant={"approve"} size={'mobile'} className="w-full bg-green-600 hover:bg-green-700">
                            Confirm
                        </Button>
                        <Button
                            type="button"
                            size={'mobile'}
                            variant="reject"
                            className="w-full bg-red-500 hover:bg-red-600"
                            onClick={onCancel}
                        >
                            Cancel
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}

