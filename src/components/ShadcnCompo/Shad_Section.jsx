import React, { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { useDispatch, useSelector } from "react-redux";
import {
  updateSecHeading1,
  updateSecHeading2,
  updateSecHeading3,
  updateTerms1,
  updateTerms2,
  updateTerms3,
  updateIsList1,
  updateIsList2,
  updateIsList3,
  updateVisibleSec1,
  updateVisibleSec2,
  updateVisibleSec3,
} from "@/features/resume/resumeSlice";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
} from "../ui/card";
import { Toggle } from "../ui/toggle";
import { EyeOff, List } from "lucide-react";
import { Switch } from "../ui/switch";
import { ScrollArea } from "../ui/scroll-area";
import { Alert, AlertTitle } from "../ui/alert";
import { AlertCircle } from "lucide-react";

function Shad_Section() {
  const dispatch = useDispatch();

  const [isList1, setIsList1] = useState(false);
  const [isList2, setIsList2] = useState(false);
  const [isList3, setIsList3] = useState(false);
  const [isVisible1, setIsVisible1] = useState(true);
  const [isVisible2, setIsVisible2] = useState(true);
  const [isVisible3, setIsVisible3] = useState(true);

  const handleList1 = () => {
    setIsList1(!isList1);
    dispatch(updateIsList1(!isList1));
  };
  const handleList2 = () => {
    setIsList2(!isList2);
    dispatch(updateIsList2(!isList2));
  };
  const handleList3 = () => {
    setIsList3(!isList3);
    dispatch(updateIsList3(!isList3));
  };

  const handleVisibile1 = () => {
    setIsVisible1(!isVisible1);
    dispatch(updateVisibleSec1(!isVisible1));
  };

  const handleVisibile2 = () => {
    setIsVisible2(!isVisible2);
    dispatch(updateVisibleSec2(!isVisible2));
  };
  const handleVisibile3 = () => {
    setIsVisible3(!isVisible3);
    dispatch(updateVisibleSec3(!isVisible3));
  };

  return (
    <>
      <div className="mb-4">
        <h1 className="text-xl font-semibold leading-7 text-gray-900">
          Sidebar Sections
        </h1>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Provide information, which be displayed as tags, eg. Skills,
          Languages, etc.
        </p>
      </div>

      <ScrollArea>
        <div className="grid lg:grid-cols-2 gap-2">
          <Card className="">
            <CardHeader>
              <CardTitle className="flex font-mono justify-between items-center gap-3">
                #1
                <Toggle>
                  <EyeOff
                    checked={isVisible1}
                    onClick={handleVisibile1}
                    className="w-5"
                  />
                </Toggle>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-3">
                <div>
                  <Label>Section Heading</Label>
                  <Input
                    onChange={(e) =>
                      dispatch(updateSecHeading1(e.target.value))
                    }
                    type="text"
                    placeholder="Enter Section Heading"
                  />
                </div>
                <div>
                  <Label>Terms</Label>
                  <Input
                    onChange={(e) =>
                      dispatch(updateTerms1(e.target.value.split(",")))
                    }
                    type="text"
                    placeholder="Term1,Term2"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex items-center gap-3">
                <Switch checked={isList1} onClick={handleList1} />
                <Label>Display as List</Label>
              </div>
            </CardFooter>
          </Card>

          <Card className="">
            <CardHeader>
              <CardTitle className="flex font-mono justify-between items-center gap-3">
                #2
                <Toggle>
                  <EyeOff
                    checked={isVisible2}
                    onClick={handleVisibile2}
                    className="w-5"
                  />
                </Toggle>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-3">
                <div>
                  <Label>Section Heading</Label>
                  <Input
                    onChange={(e) =>
                      dispatch(updateSecHeading2(e.target.value))
                    }
                    type="text"
                    placeholder="Enter Section Heading"
                  />
                </div>
                <div>
                  <Label>Terms</Label>
                  <Input
                    onChange={(e) =>
                      dispatch(updateTerms2(e.target.value.split(",")))
                    }
                    type="text"
                    placeholder="Term1,Term2"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex items-center gap-3">
                <Switch checked={isList2} onClick={handleList2} />
                <Label>Display as List</Label>
              </div>
            </CardFooter>
          </Card>

          <Card className="">
            <CardHeader>
              <CardTitle className="flex font-mono justify-between items-center gap-3">
                #3
                <Toggle>
                  <EyeOff
                    checked={isVisible3}
                    onClick={handleVisibile3}
                    className="w-5"
                  />
                </Toggle>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-3">
                <div>
                  <Label>Section Heading</Label>
                  <Input
                    onChange={(e) =>
                      dispatch(updateSecHeading3(e.target.value))
                    }
                    type="text"
                    placeholder="Enter Section Heading"
                  />
                </div>
                <div>
                  <Label>Terms</Label>
                  <Input
                    onChange={(e) =>
                      dispatch(updateTerms3(e.target.value.split(",")))
                    }
                    type="text"
                    placeholder="Term1,Term2"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex items-center gap-3">
                <Switch checked={isList3} onClick={handleList3} />
                <Label>Display as List</Label>
              </div>
            </CardFooter>
          </Card>
        </div>
        <Alert className="mt-4 bg-slate-100">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle className="">
            Utilize this section, to list your skills and knowledge.
          </AlertTitle>
        </Alert>
      </ScrollArea>
    </>
  );
}

export default Shad_Section;
