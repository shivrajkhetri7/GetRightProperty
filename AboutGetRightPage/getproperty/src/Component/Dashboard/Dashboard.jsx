import React from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import * as actions from "../../../store/actions";
import { Link } from "react-router-dom";
import { TextArea, Input } from "../../../components";
import SelectList from "../../../components/FormElements/SelectList";
import VerticalTabs from "../AgentMenuNew";
import { Spinner } from "reactstrap";
import AdminRedirect from "./AdminRedirect";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../../baseURL/baseURL";
import Pusher from "pusher-js";
import Button from "@material-ui/core/Button";
import Avaatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "react-avatar-edit";

import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
} from "phoenix-component-2.0/card";

// import Spinner from 'react-spinkit';
import { Container, Row, Col } from "react-bootstrap";
import "./Adding.css";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    const src = "./example/einshtein.jpg";
    this.state = {
      btnName: "Please Verify Mobile",
      propertyCount: "",
      name: "",
      about: "",
      email: "",
      mobile: "",
      skype: "",
      website: "",
      address: "",
      country: "",
      facebook: "",
      twitter: "",
      linkedin: "",
      images: [],
      selectedFile: null,
      loading: false,
      imgUrl: "",
      flag: false,
      flag1: false,
      flag2: false,
      flag3: false,
      preview: null,
      src: "",
    };
    this.onCrop = this.onCrop.bind(this);
    this.onClose = this.onClose.bind(this);
  }
  onClose() {
    this.setState({ preview: null });
  }

  onCrop(preview) {
    this.setState({ preview });
  }

  componentDidMount() {
    this.props.getCurrentProfile();
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/login");
    }
  }

  componentWillUnmount() {
    this.props.clearError();
    this.props.clearProperty();
  }

  componentWillReceiveProps(nextProps) {
    if (Object.keys(nextProps.profile.profile).length > 0) {
      const profile = nextProps.profile.profile;

      this.setState({
        propertyCount: this.props.property.totalCount,
        name: this.props.auth.user.name,
        country: profile.country,
        address: profile.address,
        about: profile.about,
        email: this.props.auth.user.email,
        mobile: profile.mobile + "",
        skype: profile.skype,
        website: profile.website,
        facebook: profile.socialMedia.facebook,
        twitter: profile.socialMedia.twitter,
        linkedin: profile.socialMedia.linkedin,
        imgUrl: profile.imgUrl,
      });
    }
  }

  changeText = (btnName) => {
    this.setState({ btnName });
  };

  onInputChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  //
  fileChangedHandler = (event) => {
    const file = event.target.files[0];
    this.setState({ selectedFile: file });
  };

  handlebuttonclick = (e) => {
    const { flag, flag1, flag2, flag3 } = this.state;
    console.log("event", [e.currentTarget.name]);
    if (e.currentTarget.name === "flag") {
      this.setState({
        flag: !flag,
        flag1: false,
        flag2: false,
        flag3: false,
      });
    } else if (e.currentTarget.name === "flag1") {
      this.setState({
        flag: false,
        flag1: !flag1,
        flag2: false,
        flag3: false,
      });
    } else if (e.currentTarget.name === "flag2") {
      this.setState({
        flag: false,
        flag1: false,
        flag2: !flag2,
        flag3: false,
      });
    } else if (e.currentTarget.name === "flag3") {
      this.setState({
        flag: false,
        flag1: false,
        flag2: false,
        flag3: !flag3,
      });
    }
  };

  uploadImage = (event) => {
    event.preventDefault();

    if (!this.state.selectedFile) return;

    this.setState({
      loading: true,
    });

    const formData = new FormData();
    formData.append(
      "image",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    axios
      .post(`${baseUrl}api/profile/imageUpdate`, formData)
      .then(({ data }) => {
        console.log("data", data.fileName);
        this.setState({
          images: [data.fileName, ...this.state.images],
          loading: false,
          imgUrl: data.fileName,
        });
      });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const updateProfileDetails = {
      name: this.state.name,
      country: this.state.country,
      address: this.state.address,
      about: this.state.about,
      email: this.state.email,
      // mobile: this.state.mobile + "",
      mobile: this.state.mobile,
      skype: this.state.skype,
      website: this.state.website,
      facebook: this.state.facebook,
      twitter: this.state.twitter,
      linkedin: this.state.linkedin,
      //
      imgUrl: this.state.imgUrl,
    };

    this.props.updateProfile(updateProfileDetails);
  };

  render() {
    console.log("flag", !this.state.flag);
    console.log("selectedFile", this.state.selectedFile);
    //
    // const image = (url, index) => (
    //   <img alt="" className="photo" key={index} src={url} />
    // );
    // const images = this.state.images.map(e => image(e.secure_url, e._id));
    //
    const { btnName } = this.state;

    if (Object.keys(this.props.message.msg).length > 0) {
      toast.success(this.props.message.msg);
    }
    const { profile } = this.props.profile;
    let renderContent;
    const options = [
      { label: "Choose...", value: "" },
      { label: "India", value: "india" },
      { label: "USA", value: "usa" },
      { label: "UK", value: "uk" },
    ];

    if (Object.keys(profile).length > 0) {
      renderContent = (
        <div className="m-auto col-lg-8 col-md-8 col-sm-12 pb-5  ">
          {/* <button 
     onClick={ () => { this.changeText("Mobile Verified")}  }> {btnName} </button> */}
          <NavLink className="nav-item nav-link" to="/otp">
            <button
              onClick={() => {
                this.changeText("Mobile Verified");
              }}
            >
              {" "}
              {btnName}{" "}
            </button>
          </NavLink>
          <div className="">
            <Link
              to="/agent/properties"
              className="btn btn-primary float-right"
            >
              <i className="fa fa-building" /> Total Properties{" "}
              {this.state.propertyCount}
            </Link>

            <div className="display-4 my-5 text-center">Agent Profile</div>

            {/* add */}
            <div className="Headerlabel">
              <div className="Headerlabel1">
                <Container>
                  <Row>
                    <Col>
                      <form method="post" onSubmit={this.uploadImage}>
                        <label className="label" htmlFor="gallery-image">
                          Choose an image to upload
                        </label>
                        <input
                          type="file"
                          onChange={this.fileChangedHandler}
                          id="gallery-image"
                          accept=".jpg, .jpeg, .png"
                        />
                        <button type="submit">Upload!</button>
                      </form>

                      <div className="loading-indicator">
                        {this.state.loading ? <Spinner name="spinner" /> : ""}
                      </div>
                    </Col>
                    <Col>
                      <div className="gallery">
                        {this.state.images.map((url, i) => {
                          return (
                            <img key={i} src={`${baseUrl}uploads/${url}`} />
                          );
                        })}
                      </div>
                    </Col>
                  </Row>
                  {/* <Row>
                <Col>
                  <div className="gallery">{images}</div>
                </Col>
              </Row> */}
                </Container>
              </div>
              {/* add */}
              <div className="Headerlabel2">
                <form onSubmit={this.onFormSubmit}>
                  <div className="row mt-5">
                    {/* <!-- form left --> */}
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      {/* <!-- Basic info --> */}
                      <div className="basic-info border border-dark p-3">
                        <strong className="text-muted">Basic info</strong>

                        <Input
                          label="Name"
                          name="name"
                          placeholder="john doe"
                          onChange={this.onInputChange}
                          value={this.state.name}
                          error={this.props.errors.name}
                        />

                        <SelectList
                          label="Country"
                          name="country"
                          onChange={this.onInputChange}
                          value={this.state.country}
                          options={options}
                          error={this.props.errors.country}
                        />

                        <TextArea
                          label="Address"
                          name="address"
                          placeholder="your address"
                          onChange={this.onInputChange}
                          value={this.state.address}
                          error={this.props.errors.address}
                        />

                        <TextArea
                          label="About"
                          name="about"
                          placeholder="few lines about your..."
                          onChange={this.onInputChange}
                          value={this.state.about}
                        />
                      </div>

                      {/* <!-- Contact info --> */}
                      <div className="contact-info border border-dark p-3 mt-3">
                        <strong className="text-muted">Contact info</strong>

                        <Input
                          type="email"
                          label="Email"
                          name="email"
                          placeholder="your email..."
                          onChange={this.onInputChange}
                          value={this.state.email}
                          error={this.props.errors.email}
                        />

                        <Input
                          label="Mobile"
                          name="mobile"
                          placeholder="your mobile no..."
                          onChange={this.onInputChange}
                          value={this.state.mobile}
                          error={this.props.errors.mobile}
                        />

                        <Input
                          label="Skype"
                          name="skype"
                          placeholder="user.auther5"
                          onChange={this.onInputChange}
                          value={this.state.skype}
                        />

                        <Input
                          label="Website"
                          name="website"
                          placeholder="your website url"
                          onChange={this.onInputChange}
                          value={this.state.website}
                        />
                      </div>
                    </div>
                    {/* <!-- form right --> */}
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      {/* <!-- Social media --> */}
                      <div className="contact-info border border-dark p-3">
                        <strong className="text-muted">
                          Social accounts :
                        </strong>

                        <Input
                          label="Facebook"
                          name="facebook"
                          placeholder="facebook.com/your-user-name"
                          onChange={this.onInputChange}
                          value={this.state.facebook}
                        />

                        <Input
                          label="Twitter"
                          name="twitter"
                          placeholder="twitter.com/your-user-name"
                          onChange={this.onInputChange}
                          value={this.state.twitter}
                        />

                        <Input
                          label="Linkedin"
                          name="linkedin"
                          placeholder="linkedin.com/your-user-name"
                          onChange={this.onInputChange}
                          value={this.state.linkedin}
                        />
                      </div>
                    </div>

                    <input
                      type="submit"
                      className="btn btn-primary btn-block mx-3 mt-5"
                      value="Update"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      renderContent = (
        <div
          style={{ width: "100%", height: "100vh" }}
          className="d-flex align-items-center justify-content-center"
        >
          <Spinner color="primary" />
        </div>
      );
    }

    return (
      <div className="dashboard">
        <div className="dashboard__Container">
          <div className="row">
            <div className="dashboard__columnOne">
              <div className="column">
                <div className="sidebar__titleContainer">
                  <p className="sidebar__title">Manage your Account</p>
                </div>
                <div className="sidebar__DetailContainer">
                  <span style={{ cursor: "not-allowed" }}>
                    <div className="column" style={{ marginTop: "20px" }}>
                      <Button
                        name="flag"
                        variant="contained"
                        // component={Link}
                        onClick={(e) => this.handlebuttonclick(e)}
                        color={this.state.flag ? "primary" : ""}
                        href="/agent/dashboard"
                      >
                        Profile
                      </Button>
                      <Button
                        name="flag1"
                        variant="contained"
                        // component={Link}
                        onClick={(e) => this.handlebuttonclick(e)}
                        color={this.state.flag1 ? "primary" : ""}
                        href="/agent/properties"
                      >
                        Your Properties
                      </Button>
                      <Button
                        name="flag2"
                        variant="contained"
                        //component={Link}
                        onClick={(e) => this.handlebuttonclick(e)}
                        color={this.state.flag2 ? "primary" : ""}
                        href="/agent/add-property"
                      >
                        Post Property
                      </Button>
                      {this.state.name === "rpclan" ? (
                        <Button
                          name="flag3"
                          variant="contained"
                          // component={Link}
                          onClick={(e) => this.handlebuttonclick(e)}
                          color={this.state.flag3 ? "primary" : ""}
                          href="/Admin"
                        >
                          Admin
                        </Button>
                      ) : (
                        ""
                      )}
                    </div>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="shadow"
              style={{
                width: "65%",
                height: "70%",
                padding: "1px",
                //backgroundColor: `#4bd80a`,
                margin: "3%",
              }}
            >
              <Card>
                <div className="sidebar__titleContainerSecond">
                  <p className="sidebar__title">Edit your profile</p>
                </div>
                <CardBody>
                  <div className="row" style={{ width: "100%" }}>
                    <div className="column" style={{ width: "80%" }}>
                      <form onSubmit={this.onFormSubmit}>
                        <div
                          className="row"
                          style={{
                            width: "100%",
                          }}
                        >
                          <div style={{ width: "30%" }}>
                            <p className="label__title">Name</p>
                          </div>
                          <div style={{ width: "70%" }}>
                            <div
                              class="input-group col-sm-12 col-xs-12"
                              style={{ float: "left", marginLeft: "10px" }}
                            >
                              <input
                                type="text"
                                id="name"
                                class="form-control input-md"
                                placeholder="Your Name"
                                style={{ width: "100%" }}
                                name="name"
                                required=""
                                onChange={this.onInputChange}
                                value={this.state.name}
                                error={this.props.errors.name}
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="row"
                          style={{
                            width: "100%",
                          }}
                        >
                          <div style={{ width: "30%" }}>
                            <p className="label__title">Email Address</p>
                          </div>
                          <div style={{ width: "70%" }}>
                            <div
                              class="input-group col-sm-12 col-xs-12"
                              style={{ float: "left", marginLeft: "10px" }}
                            >
                              <input
                                type="email"
                                id="name"
                                class="form-control input-md"
                                placeholder="Your email address"
                                style={{ width: "100%" }}
                                name="email"
                                required=""
                                onChange={this.onInputChange}
                                value={this.state.email}
                                error={this.props.errors.email}
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="row"
                          style={{
                            width: "100%",
                          }}
                        >
                          <div style={{ width: "30%" }}>
                            <p className="label__title">Mobile Phone</p>
                          </div>
                          <div style={{ width: "70%" }}>
                            <div
                              class="input-group col-sm-12 col-xs-12"
                              style={{ float: "left", marginLeft: "10px" }}
                            >
                              <input
                                type="number"
                                id="mobile"
                                class="form-control input-md"
                                style={{ width: "100%" }}
                                required=""
                                name="mobile"
                                placeholder="Your mobile no"
                                onChange={this.onInputChange}
                                value={this.state.mobile}
                                error={this.props.errors.mobile}
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="row"
                          style={{
                            width: "100%",
                          }}
                        >
                          <div style={{ width: "30%" }}>
                            <p
                              className="label__title"
                              style={{ marginTop: "30px" }}
                            >
                              Country
                            </p>
                          </div>
                          <div style={{ width: "70%" }}>
                            <div
                              class="input-group col-sm-12 col-xs-12"
                              style={{ float: "left", marginLeft: "10px" }}
                            >
                              <SelectList
                                name="country"
                                class="form-control input-md"
                                style={{ width: "100%" }}
                                onChange={this.onInputChange}
                                value={this.state.country}
                                options={options}
                                error={this.props.errors.country}
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="row"
                          style={{
                            width: "100%",
                          }}
                        >
                          <div style={{ width: "30%" }}>
                            <p className="label__title">Address</p>
                          </div>
                          <div style={{ width: "70%" }}>
                            <div
                              class="input-group col-sm-12 col-xs-12"
                              style={{ float: "left", marginLeft: "10px" }}
                            >
                              <input
                                name="address"
                                placeholder="your address"
                                class="form-control input-md"
                                style={{ width: "100%" }}
                                onChange={this.onInputChange}
                                value={this.state.address}
                                error={this.props.errors.address}
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="row"
                          style={{
                            width: "100%",
                          }}
                        >
                          <div style={{ width: "30%" }}>
                            <p className="label__title">About</p>
                          </div>
                          <div style={{ width: "70%" }}>
                            <div
                              class="input-group col-sm-12 col-xs-12"
                              style={{ float: "left", marginLeft: "10px" }}
                            >
                              <input
                                name="about"
                                class="form-control input-md"
                                style={{ width: "100%" }}
                                placeholder="Write about yourself"
                                onChange={this.onInputChange}
                                value={this.state.about}
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="row"
                          style={{
                            width: "100%",
                          }}
                        >
                          <div style={{ width: "30%" }}>
                            <p className="label__title">Skype</p>
                          </div>
                          <div style={{ width: "70%" }}>
                            <div
                              class="input-group col-sm-12 col-xs-12"
                              style={{ float: "left", marginLeft: "10px" }}
                            >
                              <input
                                name="skype"
                                class="form-control input-md"
                                style={{ width: "100%" }}
                                placeholder="Your skype details"
                                onChange={this.onInputChange}
                                value={this.state.skype}
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="row"
                          style={{
                            width: "100%",
                          }}
                        >
                          <div style={{ width: "30%" }}>
                            <p className="label__title">Website</p>
                          </div>
                          <div style={{ width: "70%" }}>
                            <div
                              class="input-group col-sm-12 col-xs-12"
                              style={{ float: "left", marginLeft: "10px" }}
                            >
                              <input
                                name="website"
                                class="form-control input-md"
                                style={{ width: "100%" }}
                                placeholder="Your website url"
                                onChange={this.onInputChange}
                                value={this.state.website}
                              />
                            </div>
                          </div>
                        </div>

                        <div
                          className="row"
                          style={{
                            width: "100%",
                          }}
                        >
                          <div style={{ width: "30%" }}>
                            <p className="label__title">Social Accounts :</p>
                          </div>
                        </div>
                        <div
                          className="row"
                          style={{
                            width: "100%",
                          }}
                        >
                          <div style={{ width: "30%" }}>
                            <p className="label__title">Facebook</p>
                          </div>
                          <div style={{ width: "70%" }}>
                            <div
                              class="input-group col-sm-12 col-xs-12"
                              style={{ float: "left", marginLeft: "10px" }}
                            >
                              <input
                                name="facebook"
                                class="form-control input-md"
                                style={{ width: "100%" }}
                                placeholder="facebook.com/your-user-name"
                                onChange={this.onInputChange}
                                value={this.state.facebook}
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="row"
                          style={{
                            width: "100%",
                          }}
                        >
                          <div style={{ width: "30%" }}>
                            <p className="label__title">Twitter</p>
                          </div>
                          <div style={{ width: "70%" }}>
                            <div
                              class="input-group col-sm-12 col-xs-12"
                              style={{ float: "left", marginLeft: "10px" }}
                            >
                              <input
                                class="form-control input-md"
                                style={{ width: "100%" }}
                                name="twitter"
                                placeholder="twitter.com/your-user-name"
                                onChange={this.onInputChange}
                                value={this.state.twitter}
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="row"
                          style={{
                            width: "100%",
                          }}
                        >
                          <div style={{ width: "30%" }}>
                            <p className="label__title">Linkedin</p>
                          </div>
                          <div style={{ width: "70%" }}>
                            <div
                              class="input-group col-sm-12 col-xs-12"
                              style={{ float: "left", marginLeft: "10px" }}
                            >
                              <input
                                class="form-control input-md"
                                style={{ width: "100%" }}
                                name="linkedin"
                                placeholder="linkedin.com/your-user-name"
                                onChange={this.onInputChange}
                                value={this.state.linkedin}
                              />
                            </div>
                          </div>
                        </div>

                        <div style={{ width: "100%", marginTop: "10px" }}>
                          <button className="login__signInButton">
                            Update
                          </button>
                        </div>
                      </form>
                    </div>

                    <div className="column" style={{ width: "20%" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Avaatar
                          style={{
                            width: "100px",
                            height: "100px",
                          }}
                          alt="Remy Sharp"
                          src={`${baseUrl}uploads/${this.state.imgUrl}`}
                        />
                      </div>
                    </div>

                    {/* <div style={{ width: "50px", height: "20px" }}> */}
                    <div className="column">
                      <p className="label__title">
                        Change Your profile Picture-Select an image & click on
                        Update button
                      </p>
                      <form method="post" onSubmit={this.uploadImage}>
                        <div
                          className="row dottedBorder"
                          style={{
                            width: "100%",
                            padding: "20px",
                            marginLeft: "30px",
                            // marginTop: "30px",
                            justifyContent: "space-between",
                          }}
                        >
                          <input
                            type="file"
                            onChange={this.fileChangedHandler}
                            id="gallery-image"
                            accept=".jpg, .jpeg, .png"
                          />
                          <button
                            className="login__signInButton"
                            type="submit"
                            style={{ width: "100px", height: "40px" }}
                          >
                            Upload!
                          </button>
                        </div>
                      </form>
                    </div>
                    {/* <form method="post" onSubmit={this.uploadImage}>
                        <Avatar
                          width={200}
                          height={100}
                          onCrop={this.onCrop}
                          onClose={this.onClose}
                          onChange={this.fileChangedHandler}
                          //src={this.state.src}
                        />
                        {this.state.preview !== null ? (
                          <img
                            style={{
                              width: "120px",
                              height: "120px",
                              padding: "10px",
                              marginTop: "-10px",
                            }}
                            src={this.state.preview}
                            alt="Preview"
                          />
                        ) : (
                          ""
                        )}
                        <button
                          type="submit"
                          style={{ width: "100px", height: "100px" }}
                        >
                          Upload!
                        </button>
                      </form> */}
                    {/* </div> */}
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.message,
    errors: state.errors,
    auth: state.auth,
    profile: state.profile,
    property: state.property,
  };
};

export default connect(mapStateToProps, actions)(Dashboard);
