"use client"

import { useState } from "react"


// •	Buyer:
// Email: buyer@example.com
// Password: buyerpass
// 	•	Shipper:
// Email: shipper@example.com
// Password: shipperpass
// 	•	Control Tower:
// Email: control@example.com
// Password: controlpass
// 	•	Consignee:
// Email: consignee@example.com
// Password: consigneepass
// 	•	CFS Receiver:
// Email: cfs@example.com
// Password: cfspass


export function useAuth() {
    const [persona, setPersona] = useState<string>("")

    const login = (email: string, password: string): boolean => {
        // Example hardcoded credentials for each persona:
        if (email === "buyer@example.com" && password === "buyerpass") {
            setPersona("buyer")
            return true
        } else if (email === "shipper@example.com" && password === "shipperpass") {
            setPersona("shipper")
            return true
        } else if (email === "control@example.com" && password === "controlpass") {
            setPersona("control-tower")
            return true
        } else if (email === "consignee@example.com" && password === "consigneepass") {
            setPersona("consignee")
            return true
        } else if (email === "cfs@example.com" && password === "cfspass") {
            setPersona("cfs-receiver")
            return true
        }
        return false
    }

    return { persona, login }
}